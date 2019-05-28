const converseCurrency = {
  PENNY: 0.01,
  NICKEL: 0.05,
  DIME: 0.1,
  QUARTER: 0.25,
  DOLLAR: 1,
  ONE: 1,
  FIVE: 5,
  TEN: 10,
  TWENTY: 20,
  "ONE HUNDRED": 100
};

const getNameCurrency = val =>
  Object.entries(converseCurrency).filter(
    ([key, value]) => val === value
  )[0][0];

const getLowChange = change => ([key, value]) => key < change;

const changeNameForValue = ([name, value]) => [converseCurrency[name], value];

const getAscCurrency = (
  [firstValueCurrency, firstTotalCurrency],
  [secondValueCurrency, secondTotalCurrency]
) => {
  return secondValueCurrency - firstValueCurrency;
};

const checkCashRegister = (price, cash, cid) => {
  const change = cash - price;

  const values = cid
    .map(changeNameForValue)
    .filter(getLowChange(change))
    .sort(getAscCurrency);

  const returnedCash = values.reduce(
    (acc, value) => {
      if (acc.total === change) {
        acc.status = "OPEN";
        return acc;
      }
      const [amount, units] = value;
      const needUnits = (change - acc.total) / amount;

      const addTotal = units < needUnits ? amount * units : needUnits * amount;

      if (addTotal > 0) {
        acc.total += addTotal;
        acc.change.push([getNameCurrency(amount), addTotal]);
      }

      return acc;
    },
    { status: "CLOSED", total: 0, change: [] }
  );

  delete returnedCash.total;

  return returnedCash;
};

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
  ])
);
