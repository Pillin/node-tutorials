const PRECISION_NUMBER = 2;

const converseCurrency = {
  PENNY: 0.01,
  NICKEL: 0.05,
  DIME: 0.1,
  QUARTER: 0.25,
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

const getCurrenciesChange = change => (acc, value) => {
  if (acc.total === change) {
    return acc;
  }
  const [amount, units] = value;
  const diff = (change - acc.total).toFixed(PRECISION_NUMBER);
  const needUnits = parseInt(diff / amount);

  const addTotal = units < needUnits * amount ? units : needUnits * amount;
  if (addTotal > 0) {
    acc.total += addTotal;
    acc.change.push([getNameCurrency(amount), addTotal]);
  }

  return acc;
};

const checkCashRegister = (price, cash, cid) => {
  const change = cash - price;

  const values = cid.map(changeNameForValue);

  const sum = values.reduce((acc, [amount, value]) => {
    acc += value;
    return acc;
  }, 0);

  if (sum - change === 0) {
    return {
      status: "CLOSED",
      change: cid
    };
  }
  const onlyLowers = values.filter(getLowChange(change)).sort(getAscCurrency);

  const returnedCash = onlyLowers.reduce(getCurrenciesChange(change), {
    status: "OPEN",
    total: 0,
    change: []
  });

  const diff = change - returnedCash.total;
  if (diff > 0) {
    returnedCash.status = "INSUFFICIENT_FUNDS";
    returnedCash.change = [];
  }
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

console.log(
  checkCashRegister(3.26, 100, [
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

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.5],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
  ])
);
