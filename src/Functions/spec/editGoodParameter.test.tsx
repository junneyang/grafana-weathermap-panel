// import { editGoodParameterExtend } from '../EditParameter/editGoodParameter';

// import { CoordinateSpaceClass } from 'Models/CoordinateSpaceClass';
// import { CoordinateSpaceExtendClass } from '../../Models/CoordinateSpaceExtendClass';
// import { TextObject } from 'Models/TextObjectClass';
// import { ParametrageMetrique } from 'Models/SettingMetricClass';

describe('waiting test', () => {
  test('to be pass', done => {
    setTimeout(() => {
      done();
    });
  });
});

// /*
//  * testing the editGoodParameter function
//  */
describe('test editGoodParameter', () => {
  let coords: number;

  beforeEach(() => {
    // coords = new CoordinateSpaceClass(0, '-10', '10', '-10', '10', 'espace0');
  });

  afterEach(() => {
    coords = 0;
  });

  test('positionXMin', () => {
    // editGoodParameter('positionXMin', coords, 'test-value');
    // expect(coords.getXMin()).toBe('test-value');
  });

  test('positionXMax', () => {
    // editGoodParameter('positionXMax', coords, 'test-value');
    // expect(coords.getXMax()).toBe('test-value');
  });

  test('positionYMin', () => {
    // editGoodParameter('positionYMin', coords, 'test-value');
    // expect(coords.getYMin()).toBe('test-value');
  });

  test('positionYMax', () => {
    // editGoodParameter('positionYMax', coords, 'test-value');
    // expect(coords.getYMax()).toBe('test-value');
  });

  test('label', () => {
    // editGoodParameter('label', coords, 'test-value');
    // expect(coords.getLabel()).toBe('test-value');
  });
});

/*
 * testing the editGoodParameterExtend function
 */
describe('test editGoodParameterExtend', () => {
  let coordsExtend: any;

  beforeEach(() => {
    // testTextObjectClass = new TextObject(
    //   'legend',
    //   true,
    //   'value',
    //   'unit',
    //   { Style: style },
    //   'legelement',
    //   'coltxtr',
    //   'ctyletxtr'
    // true,
    // 'numformatel',
    // 'unitumseu',
    // true,
    // true,
    // true,
    // 'coltxtele',
    // true,
    // 'colbackel'
    // );
    // parametrageMetric = new ParametrageMetrique('', '', '');
    // coordsExtend(
    //   0,
    //   '-10',
    //   '10',
    //   '-20',
    //   '20',
    //   'test-label',
    //   'test.png',
    //   'test-interface',
    //   testTextObjectClass,
    //   'key',
    //   'valkey'
    // );
  });

  afterEach(() => {
    coordsExtend = null;
  });

  test('positionXMin', () => {
    // editGoodParameterExtend('positionXMin', coordsExtend, 'test-value');
    // expect(coordsExtend.getXMin()).toBe('test-value');
  });

  test('positionXMax', () => {
    // editGoodParameterExtend('positionXMax', coordsExtend, 'test-value');
    // expect(coordsExtend.getXMax()).toBe('test-value');
  });

  test('positionYMin', () => {
    // editGoodParameterExtend('positionYMin', coordsExtend, 'test-value');
    // expect(coordsExtend.getYMin()).toBe('test-value');
  });

  test('positionYMax', () => {
    // editGoodParameterExtend('positionYMax', coordsExtend, 'test-value');
    // expect(coordsExtend.getYMax()).toBe('test-value');
  });

  test('label', () => {
    // editGoodParameterExtend('label', coordsExtend, 'test-value');
    // expect(coordsExtend.getLabel()).toBe('test-value');
  });

  test('image', () => {
    // editGoodParameterExtend('image', coordsExtend, 'test-value');
    // expect(coordsExtend.img).toBe('test-value');
  });

  test('image', () => {
    // editGoodParameterExtend('key', coordsExtend, 'test-value');
    // expect(coordsExtend.key).toBe('test-value');
  });

  test('image', () => {
    // editGoodParameterExtend('valueKey', coordsExtend, 'test-value');
    // expect(coordsExtend.valueKey).toBe('test-value');
  });
});
