import { ColorPicker, FormLabel } from '@grafana/ui';
import React, { FunctionComponent } from 'react';

/**
 * props
 */
type InputTextFieldProps = {
  color: string;
  keyInt: number;
  text: string;
  _onChange: Function;
  width?: number;
};

/**
 * 1.7 -> taille approximative d'un caractere
 * @param param0 voir InputTextFieldProps
 */
export const InputSeriesColorPickerPoint: FunctionComponent<InputTextFieldProps> = ({ color, keyInt, text, _onChange, width }) => (
  <div className="form-field">
    <FormLabel width={width || Math.round(text.length * 1.7)}>{text}</FormLabel>
    <div id="colorPicker" style={{ marginTop: '10px', marginLeft: '131px' }}>
      <ColorPicker color={color} onChange={newColor => _onChange(keyInt, newColor)} />
    </div>
  </div>
);

export default InputSeriesColorPickerPoint;
