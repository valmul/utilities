/* eslint linebreak-style: ["error", "windows"] */
/* eslint-disable no-undef */
const { expect } = require('chai');
const { getWeek } = require('../week.js');
const { relativeWeek } = require('../week.js');
const { dayIn14Days } = require('../week.js');


describe('Date', () => {
  describe('getWeek', () => {
    it('should return 1 pour 01/01/2020 ', () => {
      const date01012020 = new Date(2020, 0, 1);
      const result = getWeek(date01012020.getTime());
      expect(result).to.be.equal(1);
    });
    it('should return 2 pour 07/01/2020 ', () => {
      const date07012020 = new Date(2020, 0, 7);
      const result = getWeek(date07012020.getTime());
      expect(result).to.be.equal(2);
    });
    it('should return 12 pour 16/03/2020 ', () => {
      const date16032020 = new Date(2020, 2, 16);
      const result = getWeek(date16032020.getTime());
      expect(result).to.be.equal(12);
    });
    it('should return 53 pour 28/12/2020 ', () => {
      const date28122020 = new Date(2020, 11, 28);
      const result = getWeek(date28122020.getTime());
      expect(result).to.be.equal(53);
    });
    it('should return 52 pour 28/12/2021 ', () => {
      const date28122021 = new Date(2021, 11, 28);
      const result = getWeek(date28122021.getTime());
      expect(result).to.be.equal(52);
    });
    it('should return 53 pour 01/01/2021 ', () => {
      const date01012021 = new Date(2021, 0, 1);
      const result = getWeek(date01012021.getTime());
      expect(result).to.be.equal(53);
    });
    it('should return 1 pour 04/01/2021 ', () => {
      const date04012021 = new Date(2021, 0, 4);
      const result = getWeek(date04012021.getTime());
      expect(result).to.be.equal(1);
    });
    it('should return 1 pour 29/12/2014 ', () => {
      const date29122014 = new Date(2014, 11, 29);
      const result = getWeek(date29122014.getTime());
      expect(result).to.be.equal(1);
    });
  });

  describe('relativeWeek', () => {
    it('should return 1 for currentDay ', () => {
      const today = Date.now();
      const result = relativeWeek(today);
      expect(result).to.be.equal(1);
    });
    it('should return 0 pour currentDay - 7 ', () => {
      const currentDay = new Date();
      currentDay.setDate(currentDay.getDate() - 7);
      const timestampDayWeekBefore = currentDay.getTime();
      const result = relativeWeek(timestampDayWeekBefore);
      expect(result).to.be.equal(0);
    });
    it('should return -1 pour currentDay - 20 ', () => {
      const currentDay = new Date();
      currentDay.setDate(currentDay.getDate() - 20);
      const timestampDayWeekBefore = currentDay.getTime();
      const result = relativeWeek(timestampDayWeekBefore);
      expect(result).to.be.equal(-1);
    });
    it('should return 1 pour lundi 160320 et CurrentWeek 19/03/20  ', () => {
      const semaine190320 = new Date(2020, 2, 19);
      const monday160320 = new Date(2020, 2, 16);
      const result = relativeWeek(monday160320.getTime(), semaine190320.getTime());
      expect(result).to.be.equal(1);
    });
    it('should return 0 pour lundi 090320 et CurrentWeek 19/03/20  ', () => {
      const semaine190320 = new Date(2020, 2, 19);
      const monday090320 = new Date(2020, 2, 9);
      const result = relativeWeek(monday090320.getTime(), semaine190320.getTime());
      expect(result).to.be.equal(0);
    });
    it('should return -1 pour dimanche 080320 et CurrentWeek 19/03/20  ', () => {
      const semaine190320 = new Date(2020, 2, 19);
      const sunday08032020 = new Date(2020, 2, 7);
      const result = relativeWeek(sunday08032020.getTime(), semaine190320.getTime());
      expect(result).to.be.equal(-1);
    });
    it('should return 1 pour dimanche 220320 et CurrentWeek 19/03/20  ', () => {
      const semaine190320 = new Date(2020, 2, 19);
      const sunday22032020 = new Date(2020, 2, 22);
      const result = relativeWeek(sunday22032020.getTime(), semaine190320.getTime());
      expect(result).to.be.equal(1);
    });
    it('should return -1 pour lundi 230320 et CurrentWeek 19/03/20  ', () => {
      const semaine190320 = new Date(2020, 2, 19);
      const monday23032020 = new Date(2020, 2, 23);
      const result = relativeWeek(monday23032020.getTime(), semaine190320.getTime());
      expect(result).to.be.equal(-1);
    });
  });
  describe('dayIn14Days', () => {
    it('should return 0 pour lundi 09032020 et CurrentWeek 19/03/20  ', () => {
      const semaine190320 = new Date(2020, 2, 19);
      const monday090320 = new Date(2020, 2, 9);
      const result = dayIn14Days(monday090320.getTime(), semaine190320.getTime());
      expect(result).to.be.equal(0);
    });
    it('should return 1 pour mardi 100320 et CurrentWeek 19/03/20  ', () => {
      const semaine190320 = new Date(2020, 2, 19);
      const tuesday100320 = new Date(2020, 2, 10);
      const result = dayIn14Days(tuesday100320.getTime(), semaine190320.getTime());
      expect(result).to.be.equal(1);
    });
    it('should return 7 pour lundi 160320 et CurrentWeek 19/03/20  ', () => {
      const semaine190320 = new Date(2020, 2, 19);
      const monday160320 = new Date(2020, 2, 16);
      const result = dayIn14Days(monday160320.getTime(), semaine190320.getTime());
      expect(result).to.be.equal(7);
    });
    it('should return 13 pour dimanche 220320 et CurrentWeek 19/03/20  ', () => {
      const semaine190320 = new Date(2020, 2, 19);
      const sunday22032020 = new Date(2020, 2, 22);
      const result = dayIn14Days(sunday22032020.getTime(), semaine190320.getTime());
      expect(result).to.be.equal(13);
    });
    it('should return -1 pour lundi 230320 et CurrentWeek 19/03/20  ', () => {
      const semaine190320 = new Date(2020, 2, 19);
      const monday23032020 = new Date(2020, 2, 23);
      const result = dayIn14Days(monday23032020.getTime(), semaine190320.getTime());
      expect(result).to.be.equal(-1);
    });
    it('should return -1  pour dimanche 08/03/2020 et CurrentWeek 19/03/20  ', () => {
      const semaine190320 = new Date(2020, 2, 19);
      const sunday08032020 = new Date(2020, 2, 8);
      const result = dayIn14Days(sunday08032020.getTime(), semaine190320.getTime());
      expect(result).to.be.equal(-1);
    });
    it('should return -1 pour dimanche 12/03/2019 et CurrentWeek 19/03/20  ', () => {
      //  same Weeknumber but different year
      const semaine190320 = new Date(2020, 2, 19);
      const day12032020 = new Date(2019, 2, 19);
      const result = dayIn14Days(day12032020.getTime(), semaine190320.getTime());
      expect(result).to.be.equal(-1);
    });
  });
});
