/**
 *  Free currency API - https://github.com/fawazahmed0/currency-api
 *
 *  Lists all the available currencies in prettified json format:
 *  https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json
 *
 *  Get the currency list with EUR as base currency:
 *  https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur.json
 *
 *  Get the currency list with EUR as base currency on date 2022-11-24:
 *  https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/2022-11-24/currencies/eur.json
 *
 *  Get the currency value for EUR to JPY:
 *  https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/jpy.json
 *
 * */

import { getDate } from "../utils";

const allCurrenciesLatestUrl =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json";
const allCurrenciesWithCurrentDateUrl = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/${getDate()}/currencies.json`;

const baseUrlLatest =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
const baseUrlWithCurrentDate = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/${getDate()}/currencies`;

export const allCurrenciesUrls = [
  allCurrenciesWithCurrentDateUrl,
  allCurrenciesLatestUrl,
];
export const baseUrls = [baseUrlWithCurrentDate, baseUrlLatest];
