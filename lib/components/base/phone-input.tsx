import PhoneInput from 'react-phone-input-2';

const PosPhoneInput = () => {
  return (
    <PhoneInput
      inputStyle={{ width: '100%' }}
      country="us"
      value="1425652"
      onChange={(phone) => ({ phone })}
    />
  );
};

export default PosPhoneInput;
