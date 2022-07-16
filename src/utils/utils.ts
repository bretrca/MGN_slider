export function handleTick(
  value: number,
  range: any,
  direction: string,
  min: number,
  max: number
) {
  const rangeOfElementsToShow = [...range, min, max];
  const rangeSorted = rangeOfElementsToShow.sort(
    (a: number, b: number) => a - b
  );
  if (direction === "min") {
    const nextStep = rangeSorted.find((step: any) => {
      return step >= value || (step === min && step);
    });
    return nextStep;
  } else {
    const nextStep = rangeSorted.find((step: any) => {
      return step >= value || (step === max && step);
    });
    return nextStep;
  }
}
export function getData(setData: any, setListedData: any) {
  fetch("https://demo8614250.mockable.io/")
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json: any) => {
      setData(json["min-max"]);
      setListedData(json["listed-values"]);
    })
    .catch((err) => console.log(err));
}
