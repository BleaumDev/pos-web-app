import type { FieldInputProps, FormikProps, FormikValues } from 'formik';
import type { CSSObjectWithLabel } from 'react-select';
import ReactSelect from 'react-select';

import ErrorMessage from '../ErrorMessage';

export type OptionType = {
  key?: string | number;
  value?: string;
  label?: string | JSX.Element | JSX.IntrinsicElements;
};

type OptionsType = Array<OptionType>;

interface Props {
  name: string;
  options?: OptionsType;
  value?: number | string;
  onChange?: (option: OptionType | Array<OptionType> | null) => void;
  isDisabled?: boolean;
  placeholder?: string;
  height?: string | number;

  field?: FieldInputProps<any>;
  form?: FormikProps<FormikValues>;
  isMulti?: boolean;
  inputStyle?: CSSObjectWithLabel;
}

const Select = (props: Props) => {
  const {
    options: allowedOptions,
    value,
    name,
    onChange,
    form,
    field,
    placeholder = 'Select',
    isDisabled = false,
    isMulti = false,
    height,
    inputStyle,
  } = props;
  const fieldName = field?.name ?? name;

  const handleOnChange = (option: OptionType | Array<OptionType> | null) => {
    if (form === undefined) return;

    if (isMulti && Array.isArray(option)) {
      form.setFieldValue(
        fieldName!,
        option ? option.map((item) => item.value) : []
      );
      return;
    }

    form.setFieldValue(field!.name, (option as OptionType)?.value);
  };

  const options = allowedOptions?.map((_option: OptionType) => {
    return { ..._option, value: _option.value || _option.key };
  });

  const getValue = () => {
    if (value) {
      return options?.find((option) => option.value === value) ?? value;
    }

    if (options === undefined || options?.length < 1) {
      return isMulti ? [] : ('' as any);
    }

    if (isMulti)
      return options.filter(
        (option) => field?.value.indexOf(option.value) >= 0
      );

    // the null is to reset the value of the select
    return (
      options?.find((option) => option.value === (field?.value ?? '')) ?? null
    );
  };
  return (
    <>
      <ReactSelect
        isMulti={isMulti}
        styles={{
          placeholder: (baseStyles) => ({
            ...baseStyles,
            color: '#64646C',
            fontSize: '14px',
            display: 'flex',
            alignItems: 'start',
            justifyContent: 'start',
            paddingRight: '10px',
            paddingLeft: '10px',
          }),
          valueContainer: (baseStyles) => ({
            ...baseStyles,
            padding: '0px',
          }),
          singleValue: (baseStyles) => ({
            ...baseStyles,
            padding: '2px 8px',
          }),
          menuList: (baseStyles) => ({
            ...baseStyles,
            background: '#fff',
            borderRadius: '10px',
            position: 'absolute',
            width: '100%',

            border: '0.5px solid #64646C',
            boxShadow: '0px 2px 6px 0px #13124212',
            boxSizing: 'border-box',
          }),

          menu: (baseStyles) => ({
            ...baseStyles,
            outline: 'none !important',
            border: 'none !important',

            boxShadow: 'none !important',

            zIndex: 9999,
          }),
          option: (baseStyles, state) => ({
            ...baseStyles,
            '&:hover': {
              background: '#FFA382',
              color: '#fff',
            },
            backgroundColor: state.isSelected ? '#fff' : '#fff',
          }),
          input: (baseStyles) => ({
            ...baseStyles,
            border: 'none !important',
            background: 'none !important',
            boxShadow: 'none !important',
            outline: 'none !important',
            minWidth: '50px',

            paddingRight: '10px',
            paddingLeft: '10px',
          }),
          control: (baseStyles) => ({
            ...baseStyles,
            borderRadius: '8px',
            border: '0.5px solid #64646C',
            boxShadow: '0px 2px 6px 0px #13124212',
            boxSizing: 'border-box',

            height: height ?? '50px',
            '@media (max-width: 1024px)': {
              height: height ?? '45px',
            },
            ...inputStyle,
          }),

          container: (baseStyles) => ({
            ...baseStyles,
            input: {
              background: 'none !important',
              boxShadow: 'none !important',

              outline: 'none !important',
              minWidth: '50px',
            },
            '& input:focus': {
              background: 'none !important',
              boxShadow: 'none !important',
              outline: 'none !important',
              border: 'none !important',
            },
          }),
        }}
        isDisabled={isDisabled}
        isClearable
        value={getValue()}
        options={options}
        name={fieldName}
        onChange={onChange ?? handleOnChange}
        onBlur={(e) => {
          field?.onBlur?.(e);
          form?.setTouched({
            ...form.touched,
            [fieldName]: true,
          });
        }}
        placeholder={placeholder}
      />
      {form && form.errors[fieldName] && form.touched[fieldName] && (
        <ErrorMessage touched message="Something went wrong" />
      )}
    </>
  );
};

export default Select;
