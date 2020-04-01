import React from 'react';
import ReactDOM from 'react-dom';
import ManageSeuil from '../manageSeuil';
import { LoadingState } from '@grafana/data';
import { defaults, SimpleOptions } from '../../types';
import { act } from 'react-dom/test-utils';

/*
 * testing the ManageSeuil component features
 * - loading data from a json
 * - edit input fields
 */
describe('ManageSeuil tests', () => {
  let container, component;
  const additionalStep = { value: '1', label: '1' };
  /*
   * Mock "onOptionChange" by re-rendering the component with the new options
   */
  let mockFunctions = {
    onOptionsChange: (options: SimpleOptions, callback?: () => void) => {
      testProps.options = options;
      act(() => {
        ReactDOM.render(<ManageSeuil ref={c => (component = c)} {...testProps} />, container);
      });
    },
  };
  let testProps = {};
  beforeEach(() => {
    let clonedDefaults = JSON.parse(JSON.stringify(defaults));
    clonedDefaults.listStep[1] = JSON.parse(JSON.stringify(additionalStep));
    clonedDefaults.contourIsActive = false;
    clonedDefaults.fondIsActive = false;
    clonedDefaults.colorMode = false;
    container = document.createElement('div');
    document.body.appendChild(container);
    testProps = {
      options: clonedDefaults,
      onOptionsChange: mockFunctions.onOptionsChange,
      data: {
        state: LoadingState.Done,
        series: [
          {
            name: 'serieName',
            fields: [],
            length: 15,
          },
        ],
        timeRange: clonedDefaults.timeRange,
      },
    };
    act(() => {
      ReactDOM.render(<ManageSeuil ref={c => (component = c)} {...testProps} />, container);
    });
  });

  test('initial state', () => {
    expect(component.state.contourIsActive).toBe(false);
    expect(component.state.fondIsActive).toBe(false);
    expect(component.state.colorMode).toBe(false);
  });

  test('switch contourIsActive', () => {
    expect(component.state.contourIsActive).toBe(false);
    component.onSwitchContour();
    expect(component.state.contourIsActive).toBe(true);
    component.onSwitchContour();
    expect(component.state.contourIsActive).toBe(false);
  });

  test('switch fondIsActive', () => {
    expect(component.state.fondIsActive).toBe(false);
    component.onSwitchFond();
    expect(component.state.fondIsActive).toBe(true);
    component.onSwitchFond();
    expect(component.state.fondIsActive).toBe(false);
  });

  test('switch colorMode', () => {
    expect(component.state.colorMode).toBe(false);
    component.onSwitchColorMode();
    expect(component.state.colorMode).toBe(true);
    component.onSwitchColorMode();
    expect(component.state.colorMode).toBe(false);
  });
});
