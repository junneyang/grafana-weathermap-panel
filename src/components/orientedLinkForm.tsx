import React from 'react';
import { InputSelectableClass } from 'Models/InputSelectableClass';
import { ArrayInputSelectableClass } from 'Models/ArrayInputSelectableClass';
import { SelectableValue, PanelEditorProps } from '@grafana/data';
import InputTextOrientedLink from 'Functions/Input/inputTextOrientedLink';
import InputSelectOrientedLink from 'Functions/Input/inputSelectOrientedLink';
import InputSeriesColorPickerOrientedLink from 'Functions/Input/inputSeriesColorPickerOrientedLink';
import InputButtonField from 'Functions/Input/inputButton';
import { OrientedLinkClass } from 'Models/OrientedLinkClass';
import { createInputsOrientedLink } from 'Functions/CreateInput/createInputsOrientedLink';
import { editGoodParameterOrientedLink } from 'Functions/EditParameter/editGoodParameterOrientedLink';
import { RegionClass } from 'Models/RegionClass';
import { PointClass } from 'Models/PointClass';
import { TextObject } from 'Models/TextObjectClass';
import { LinkURLClass } from 'Models/LinkURLClass';
import { SimpleOptions, Metric } from 'types';
import { Collapse, Button } from '@grafana/ui';
import ParametresGeneriques from './Parametrage/parametresGeneriques';
import { LowerLimitClass } from 'Models/LowerLimitClass';
import { CoordinateSpaceClass } from 'Models/CoordinateSpaceClass';
import ManageLowerLimit from './Parametrage/manageLowerLimit';
import { PositionParameterClass } from 'Models/PositionParameterClass';
import PositionParameter from './Parametrage/positionParameters';
import ManageQuery from './CoordinateSpace/manageQuery';
import ManageAuxiliaryQuery from './CoordinateSpace/manageAuxiliaryQuery';

/**
 * IProps
 */
interface Props extends PanelEditorProps<SimpleOptions> {
  /**
   * function for return arrayInput for Parent
   */
  callBackFromParent: (dataFromChild: OrientedLinkClass[]) => void;

  /** to do */
  //CallBackIdOrientedLink: Function;

  /**
   * old data
   */
  oldArrayOrientedLinkClass: OrientedLinkClass[];

  /**
   * array of region existing
   */
  regionCoordinateSpace: RegionClass[];

  /**
   * array of point existing
   */
  arrayPoint: PointClass[];
}

/**
 * IState
 */
interface State {
  /**
   * to do
   */
  arrayInput: ArrayInputSelectableClass[];
  /**
   * to do
   */
  arrayOrientedLinkClass: OrientedLinkClass[];

  /**
   * to do
   */
  index: number;

  /**
   * to do
   */
  debug: boolean;

  /**
   * to do
   */
  listCollapseOrientedLink: boolean[];
}

/**
 * IndexParametrage
 */
export default class OrientedLinkForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      arrayInput: [],
      arrayOrientedLinkClass: [],
      index: 1,
      debug: false,
      listCollapseOrientedLink: [],
    };
  }

  /**
   * to do
   */
  private callBack = () => {
    this.props.callBackFromParent(this.state.arrayOrientedLinkClass);
  };

  private loadCoorParent = () => {
    const { oldArrayOrientedLinkClass } = this.props;
    if (oldArrayOrientedLinkClass.length === 0 || this.state.debug === true) {
      if (!this.state.debug) {
        this.setState((prevState: State) => ({
          debug: !prevState.debug,
        }));
      }
      return;
    }

    for (const element of oldArrayOrientedLinkClass) {
      setTimeout(() => {
        this.addInput(
          element.id,
          element.label,
          element.orientationLink,
          element.pointAPositionX,
          element.pointAPositionY,
          element.colorCoordinateA,
          element.pointBPositionX,
          element.pointBPositionY,
          element.colorCoordinateB,
          element.pointIn,
          element.pointOut,
          element.regionIn,
          element.regionOut,
          //element.mainMetric.refId, element.mainMetric.key, element.mainMetric.keyValue,
          element.textObj,
          element.lowerLimit,
          element.positionParameter,
          element.pointCPositionX,
          element.pointCPositionY,
          element.isIncurved,
          element.mainMetric,
          element.metrics
        );
      }, 100);
    }

    this.setState((prevState: State) => ({
      debug: !prevState.debug,
    }));
  };

  private defineDataRegion(): Array<SelectableValue<RegionClass>> {
    const { regionCoordinateSpace } = this.props;
    const optionRegionNull: SelectableValue<RegionClass> = { label: 'No selected region' };
    const arrayOptionsRegion: Array<SelectableValue<RegionClass>> = [];

    arrayOptionsRegion.push(optionRegionNull);

    regionCoordinateSpace.forEach(region => {
      const optionRegion: SelectableValue<RegionClass> = {
        label: region.label,
        value: region,
      };
      arrayOptionsRegion.push(optionRegion);
    });
    return arrayOptionsRegion;
  }

  private defineDataPoint(): Array<SelectableValue<PointClass>> {
    const { arrayPoint } = this.props;
    const optionPointNull: SelectableValue<PointClass> = { label: 'No selected point' };
    const arrayOptionsPoint: Array<SelectableValue<PointClass>> = [];

    arrayOptionsPoint.push(optionPointNull);

    arrayPoint.forEach(point => {
      let valueLabel = point.label;

      if (point.label === '') {
        valueLabel = point.name;
      }

      const optionPoint: SelectableValue<PointClass> = {
        label: valueLabel,
        value: point,
      };
      arrayOptionsPoint.push(optionPoint);
    });

    return arrayOptionsPoint;
  }

  /**
   * add inputs for a new coordiante
   */
  private addInput = (
    id?: number,
    label?: string,
    orientationLink?: SelectableValue<string>,
    pointAPositionX?: string,
    pointAPositionY?: string,
    colorCoordinateA?: string,
    pointBPositionX?: string,
    pointBPositionY?: string,
    colorCoordinateB?: string,
    pointIn?: string,
    pointOut?: string,
    regionIn?: string,
    regionOut?: string,
    //refIdMainMetric?: string, keyMainMetric?: string, keyValueMainMetric?: string,
    textObj?: TextObject,
    seuil?: LowerLimitClass[],
    positionParameter?: PositionParameterClass,
    pointCPositionX?: string,
    pointCPositionY?: string,
    isIncurved?: SelectableValue<boolean>,
    mainMetrics?: Metric,
    auxiliaryMetrics?: Metric[]
  ) => {
    const num: number = id || this.props.options.indexOrientedLink + 1;
    const zIndex: number = this.props.options.zIndexOrientedLink;
    const finalArray: InputSelectableClass[] = createInputsOrientedLink(num, this.defineDataRegion(), this.defineDataPoint());
    const initTextObject: TextObject =
      textObj ||
      new TextObject(
        '',
        false,
        '',
        '',
        '',
        false,
        {
          legendElement: '',
          numericFormatElement: '',
          unit: '',
          displayObjectInText: false,
          // 'displayObjectPermanently': false,
          addColorTextElement: false,
          colorTextElement: 'white',
          addColorBackElement: false,
          colorBackElement: 'black',
        },
        {
          legendElement: '',
          numericFormatElement: '',
          unit: '',
          displayObjectInText: false,
          // 'displayObjectPermanently': false,
          addColorTextElement: false,
          colorTextElement: 'white',
          addColorBackElement: false,
          colorBackElement: 'black',
        }
      );
    const parametrageMetric: LinkURLClass = new LinkURLClass('', '', '');
    const initPositionParameter: PositionParameterClass = positionParameter || new PositionParameterClass('', '', '', '', {}, {});
    const initMainMetrics: Metric = mainMetrics || { key: '', unit: '', format: '', keyValue: '', refId: '', manageValue: 'avg' };

    this.setState((prevState: State) => ({
      arrayOrientedLinkClass: prevState.arrayOrientedLinkClass.concat(
        new OrientedLinkClass(
          num,
          parametrageMetric,
          '',
          seuil || [],
          label || '',
          initTextObject,
          // {
          // 	'key': keyMainMetric || '',
          // 	'unit': '',
          // 	'format': '',
          // 	'keyValue': keyValueMainMetric || '',
          // 	'refId': refIdMainMetric || '',
          // 	'manageValue': 'avg',
          // }
          initMainMetrics,
          auxiliaryMetrics || [],
          false,
          false,
          false,
          initPositionParameter,
          'orientedLink' + num.toString(),
          orientationLink || { label: 'double', value: 'double' },
          pointAPositionX || '0',
          pointAPositionY || '0',
          colorCoordinateA || '#5794F2',
          pointBPositionX || '0',
          pointBPositionY || '0',
          colorCoordinateB || '#E54658',
          '',
          '',
          pointIn || '',
          pointOut || '',
          regionIn || '',
          regionOut || '',
          zIndex,
          pointCPositionX || '0',
          pointCPositionY || '0',
          isIncurved || {}
        )
      ),

      arrayInput: prevState.arrayInput.concat([new ArrayInputSelectableClass(num, finalArray)]),
      //index: (id || this.state.index) + 1,
    }));

    this.props.onOptionsChange({
      ...this.props.options,
      indexOrientedLink: num,
    });
  };

  /**
   * Delete array coordinate in state.oldArrayOrientedLinkClass
   * @param {number} id id of object element to delete
   */
  private deleteArrayOrientedLinkClass(id: number): void {
    const newLinkClass: OrientedLinkClass[] = this.state.arrayOrientedLinkClass.filter((value: OrientedLinkClass) => value.id !== id);
    this.setState({
      arrayOrientedLinkClass: newLinkClass,
    });
    setTimeout(() => {
      this.callBack();
    }, 100);
  }

  /**
   * Delete array input and value
   * @param {event} event event click delete button
   */
  private deleteOwnInput = (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    const { arrayInput } = this.state;
    const id = event.currentTarget.id;
    for (const obj of arrayInput) {
      for (const line of obj.uneClassInput) {
        if (line.input_type === 'button') {
          if (line.id === id) {
            const updateArrayInput: ArrayInputSelectableClass[] = arrayInput.filter((value: ArrayInputSelectableClass) => value.id !== obj.id);
            this.setState({
              arrayInput: updateArrayInput,
            });
            this.deleteArrayOrientedLinkClass(parseInt(id, 10));
            return;
          }
        }
      }
    }
  };

  /**
   * Use function if value input change
   * @param {string} currentTarget new value of input
   * @param {string} name name of input
   * @param {number} index id of input
   */
  private _handleChange(currentTarget: string, name: string, index: number) {
    let i: number;

    i = 0;
    const copyOfoldArrayOrientedLinkClass: OrientedLinkClass[] = this.state.arrayOrientedLinkClass.slice();
    for (const line of copyOfoldArrayOrientedLinkClass) {
      if (line.id === index) {
        copyOfoldArrayOrientedLinkClass[i] = editGoodParameterOrientedLink(name, copyOfoldArrayOrientedLinkClass[i], currentTarget, {});
        break;
      }
      i++;
    }
    this.setState({
      arrayOrientedLinkClass: copyOfoldArrayOrientedLinkClass,
    });
    this.callBack();
  }

  /**
   * Get value of input with state.oldArrayOrientedLinkClass
   * @param {number} id id of element
   * @param {string} param name of input
   * @returns {string} value of the array element
   */
  private getGoodValue(id: number, name: string): any {
    let value: string;
    let valueSelect: SelectableValue<any>;
    let valueMetric: Metric;
    let idx = -1;
    let index = 0;

    value = '';
    valueSelect = {};
    for (const line of this.state.arrayOrientedLinkClass) {
      if (line.id === id) {
        idx = index;
        break;
      }
      ++index;
    }

    if (idx === -1) {
      return value;
    }

    if (name.startsWith('orientationLink') || name.startsWith('isIncurved')) {
      if (name.startsWith('orientationLink')) {
        valueSelect = this.state.arrayOrientedLinkClass[idx].orientationLink;
      } else if (name.startsWith('isIncurved')) {
        valueSelect = this.state.arrayOrientedLinkClass[idx].isIncurved;
      }
      return valueSelect;
    } else if (name.startsWith('mainMetric')) {
      valueMetric = this.state.arrayOrientedLinkClass[idx].mainMetric;
      return valueMetric;
    } else {
      if (name.startsWith('label')) {
        value = this.state.arrayOrientedLinkClass[idx].label;
      } else if (name.startsWith('pointAX')) {
        value = this.state.arrayOrientedLinkClass[idx].pointAPositionX;
      } else if (name.startsWith('pointAY')) {
        value = this.state.arrayOrientedLinkClass[idx].pointAPositionY;
      } else if (name.startsWith('pointBX')) {
        value = this.state.arrayOrientedLinkClass[idx].pointBPositionX;
      } else if (name.startsWith('pointBY')) {
        value = this.state.arrayOrientedLinkClass[idx].pointBPositionY;
      } else if (name.startsWith('colorCoordinateA')) {
        value = this.state.arrayOrientedLinkClass[idx].colorCoordinateA;
      } else if (name.startsWith('colorCoordinateB')) {
        value = this.state.arrayOrientedLinkClass[idx].colorCoordinateB;
      } else if (name.startsWith('refIdMainMetric')) {
        value = this.state.arrayOrientedLinkClass[idx].mainMetric.refId || '';
      } else if (name.startsWith('keyMainMetric')) {
        value = this.state.arrayOrientedLinkClass[idx].mainMetric.key || '';
      } else if (name.startsWith('keyValueMainMetric')) {
        value = this.state.arrayOrientedLinkClass[idx].mainMetric.keyValue || '';
      } else if (name.startsWith('pointCX')) {
        value = this.state.arrayOrientedLinkClass[idx].pointCPositionX;
      } else if (name.startsWith('pointCY')) {
        value = this.state.arrayOrientedLinkClass[idx].pointCPositionY;
      }
      // else if (name.startsWith('labelLinkA')) {
      // 	value = this.state.oldArrayOrientedLinkClass[idx].labelLinkA;
      // } else if (name.startsWith('labelLinkB')) {
      // 	value = this.state.oldArrayOrientedLinkClass[idx].labelLinkB;
      // } else if (name.startsWith('positionXLabelLinkA')) {
      // 	value = this.state.oldArrayOrientedLinkClass[idx].positionXLabelA;
      // } else if (name.startsWith('positionYLabelLinkA')) {
      // 	value = this.state.oldArrayOrientedLinkClass[idx].positionYLabelA;
      // } else if (name.startsWith('positionXLabelLinkB')) {
      // 	value = this.state.oldArrayOrientedLinkClass[idx].positionXLabelB;
      // } else if (name.startsWith('positionYLabelLinkB')) {
      // 	value = this.state.oldArrayOrientedLinkClass[idx].positionYLabelB;
      // }
      return value;
    }
  }

  /** update lower limit */
  private callBackManageLowerLimit = (coordiante: CoordinateSpaceClass, id?: number) => {
    const newValue: OrientedLinkClass = this.state.arrayOrientedLinkClass[id || 0];
    newValue.colorMode = coordiante.colorMode;
    newValue.traceBorder = coordiante.traceBorder;
    newValue.traceBack = coordiante.traceBack;
    // newValue.lowerLimit = coordiante.lowerLimit;
    this.props.options.arrayOrientedLinks[id || 0] = newValue;
    this.callBack();
  };

  /** save lower limit data */
  private callBackLowerLimit = (lowerLimit: LowerLimitClass[], id?: number) => {
    const newValue: OrientedLinkClass = this.state.arrayOrientedLinkClass[id || 0];
    newValue.lowerLimit = lowerLimit;
    this.props.options.arrayOrientedLinks[id || 0] = newValue;
    this.callBack();
  };

  /**
   * to do
   */
  private defineListCollapse = () => {
    this.props.options.listCollapsePoint = [];
    const arrayOrientedLink = this.state.arrayOrientedLinkClass;
    arrayOrientedLink.forEach(orientedLink => {
      this.props.options.listCollapseOrientedLink.push(false);
    });
  };

  private callBackToOther = (
    followLink?: string,
    hoveringTooltipLink?: string,
    hoveringTooltipText?: string,
    textObj?: TextObject,
    id?: number
  ): void => {
    const oldCoor: OrientedLinkClass = this.state.arrayOrientedLinkClass[id || 0];
    if (followLink) {
      oldCoor.linkURL.followLink = followLink;
    }
    if (hoveringTooltipLink) {
      oldCoor.linkURL.hoveringTooltipLink = hoveringTooltipLink;
    }
    if (hoveringTooltipText) {
      oldCoor.linkURL.hoveringTooltipText = hoveringTooltipText;
    }
    if (textObj) {
      oldCoor.textObj = textObj;
    }
    const arrayOrientedLink: OrientedLinkClass[] = this.props.options.arrayOrientedLinks;

    arrayOrientedLink[id || 0] = oldCoor;

    this.props.onOptionsChange({
      ...this.props.options,
      arrayOrientedLinks: arrayOrientedLink,
    });
  };

  private defineLabelCollapse(id: number): string {
    let label: string = this.getGoodValue(id, 'label');
    if (this.getGoodValue(id, 'label') === '') {
      label = 'OrientedLink ' + id.toString();
    }
    return label;
  }

  private callBackPositionParameter = (positionParameter: PositionParameterClass, id?: number) => {
    const orientedLinkToUpdate: OrientedLinkClass = this.state.arrayOrientedLinkClass[id || 0];
    orientedLinkToUpdate.positionParameter = positionParameter;
    this.props.options.arrayOrientedLinks[id || 0] = orientedLinkToUpdate;
    this.callBack();
  };

  private callBackZIndex(zIndexUpdated: number, id: number) {
    this.props.options.arrayOrientedLinks[id].zIndex = zIndexUpdated;
    this.callBack();
  }

  private callBackMainMetric = (mainMetric: Metric, id?: number): void => {
    const newValue: OrientedLinkClass = this.state.arrayOrientedLinkClass[id || 0];
    newValue.mainMetric = mainMetric;
    this.props.options.arrayOrientedLinks[id || 0] = newValue;
    this.callBack();
  };

  private callBackAuxiliaryMetric = (auxiliaryMetrics: Metric[], id?: number): void => {
    const newValue: OrientedLinkClass = this.state.arrayOrientedLinkClass[id || 0];
    newValue.metrics = auxiliaryMetrics;
    this.props.options.arrayOrientedLinks[id || 0] = newValue;
    this.callBack();
  };

  /**
   * create dynamic input
   */
  private generateInputsOrientedLinks(): JSX.Element {
    let index = 0;
    this.defineListCollapse();
    const { arrayInput } = this.state;
    let finalItem: JSX.Element[] = [];
    let item: JSX.Element = <div></div>;
    let itemButton: JSX.Element = <div></div>;

    for (const line of arrayInput) {
      const mapItems: JSX.Element[] = [];

      line.uneClassInput.forEach(obj => {
        if (obj.input_type === 'text') {
          item = (
            <InputTextOrientedLink
              key={obj.id}
              label={obj.label}
              name={obj.name}
              placeholder={obj.placeholder || ''}
              required={obj.required}
              value={this.getGoodValue(line.id, obj.name)}
              _handleChange={(event: {
                /**
                 * get currentTarget in event element
                 */
                currentTarget: HTMLInputElement;
              }) => {
                this._handleChange(event.currentTarget.value, obj.name, line.id);
              }}
              isIncurved={this.getGoodValue(line.id, 'isIncurved')}
            />
          );
        } else if (obj.input_type === 'select') {
          item = (
            <InputSelectOrientedLink
              key={obj.id}
              _onChange={(value: SelectableValue<string>, name: string, index: number) => {
                let i: number;
                i = 0;
                const copyOfoldArrayOrientedLinkClass: OrientedLinkClass[] = this.state.arrayOrientedLinkClass.slice();

                for (const line of copyOfoldArrayOrientedLinkClass) {
                  if (line.id === index) {
                    copyOfoldArrayOrientedLinkClass[i] = editGoodParameterOrientedLink(
                      name,
                      copyOfoldArrayOrientedLinkClass[i],
                      value.value || '',
                      value || {}
                    );
                    break;
                  }
                  i++;
                }

                this.setState({
                  arrayOrientedLinkClass: copyOfoldArrayOrientedLinkClass,
                });

                this.callBack();
              }}
              name={obj.name}
              index={line.id}
              data={obj.optionValues}
              defaultValue={this.getGoodValue(line.id, obj.name)}
              label={obj.label}
            />
          );
        } else if (obj.input_type === 'color') {
          item = (
            <InputSeriesColorPickerOrientedLink
              key={obj.id}
              keyInt={parseInt(obj.id, 10)}
              color={this.getGoodValue(line.id, obj.name)}
              text={obj.label}
              width={10}
              _onChange={(keyInt: number, newColor: string) => {
                let i: number;
                i = 0;
                const copyOfArrayOrientedLinkClass: OrientedLinkClass[] = this.state.arrayOrientedLinkClass.slice();
                for (const line of copyOfArrayOrientedLinkClass) {
                  if (line.id === keyInt) {
                    copyOfArrayOrientedLinkClass[i] = editGoodParameterOrientedLink(obj.name, copyOfArrayOrientedLinkClass[i], newColor, {});
                    break;
                  }
                  i++;
                }

                this.setState({
                  arrayOrientedLinkClass: copyOfArrayOrientedLinkClass,
                });

                this.callBack();

                obj.setDefaultValueColor(newColor);
              }}
            />
          );
        } else {
          itemButton = (
            <InputButtonField
              key={obj.id}
              label={obj.label}
              value={obj.value || ''}
              name={obj.name}
              required={obj.required}
              _handleChange={this.deleteOwnInput}
              id={obj.id}
              withLabel={false}
            />
          );
          item = <div></div>;
        }
        mapItems.push(item);
      });

      const divKey: string = 'inputOrientedLink' + line.id.toString();
      const newInput: JSX.Element = (
        <div
          key={divKey}
          className="inputCoor"
          id={'orientedLink' + line.id.toString()}
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginBottom: '5px',
          }}
        >
          <Collapse
            isOpen={this.state.listCollapseOrientedLink[line.id - 1]}
            label={this.defineLabelCollapse(line.id)}
            onToggle={isOpen => {
              this.props.options.listCollapseOrientedLink[line.id - 1] = isOpen;
              this.setState({
                listCollapseOrientedLink: this.props.options.listCollapseOrientedLink,
              });
            }}
          >
            <div>
              <ManageQuery
                options={this.props.options}
                idCoordinate={this.state.arrayOrientedLinkClass[index].id}
                onOptionsChange={this.props.onOptionsChange}
                data={this.props.data}
                mainMetric={this.state.arrayOrientedLinkClass[index].mainMetric}
                callBackToParent={this.callBackMainMetric}
                id={index}
              />
            </div>
            <div>
              <ManageAuxiliaryQuery
                options={this.props.options}
                idCoordinate={this.state.arrayOrientedLinkClass[index].id}
                onOptionsChange={this.props.onOptionsChange}
                data={this.props.data}
                metrics={this.state.arrayOrientedLinkClass[index].metrics}
                callBackToParent={this.callBackAuxiliaryMetric}
                id={index}
                isPoint={false}
                isLink={true}
                isRegion={false}
              />
            </div>
            <div>
              <ParametresGeneriques
                options={this.props.options}
                onOptionsChange={this.props.onOptionsChange}
                data={this.props.data}
                coordinateSpace={this.state.arrayOrientedLinkClass[index]}
                callBackToParent={this.callBackToOther}
                id={index}
              />
            </div>
            <div>
              <ManageLowerLimit
                coordinate={this.state.arrayOrientedLinkClass[index]}
                callBack={this.callBackManageLowerLimit}
                lowerLimitCallBack={this.callBackLowerLimit}
                id={index}
              />
            </div>
            <div>
              <PositionParameter
                options={this.props.options}
                onOptionsChange={this.props.onOptionsChange}
                data={this.props.data}
                coordinateSpace={this.state.arrayOrientedLinkClass[index]}
                callBackToParent={this.callBackPositionParameter}
                callBackToParentZIndex={this.callBackZIndex.bind(this)}
                isPoint={false}
                isLink={true}
                isRegion={false}
                id={index}
                orientedLink={this.state.arrayOrientedLinkClass[index]}
              />
            </div>
            {mapItems}
          </Collapse>
          <div style={{ marginTop: '4px' }}>{itemButton}</div>
        </div>
      );
      finalItem = finalItem.concat(newInput);
      index++;
    }

    return <div>{finalItem}</div>;
  }

  /**
   * to do
   */
  componentDidMount = () => {
    this.loadCoorParent();
  };

  componentWillReceiveProps() {
    this.loadCoorParent();
    this.generateInputsOrientedLinks();
  }

  /** update state when props uneCoor change */
  componentDidUpdate(prevProps: Props) {
    this.loadCoorParent();
    this.generateInputsOrientedLinks();
  }

  /**
   * render()
   */
  render() {
    const stylePositionButton = {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
    } as React.CSSProperties;
    return (
      <div>
        {this.generateInputsOrientedLinks()}
        <div style={stylePositionButton}>
          <Button
            onClick={() => {
              this.setState({
                arrayInput: [],
                arrayOrientedLinkClass: [],
                debug: false,
              });
              this.loadCoorParent();
              this.generateInputsOrientedLinks();
            }}
          >
            Load Oriented Links
          </Button>
        </div>
      </div>
    );
  }
}
