import PhoneInput from 'react-phone-input-2';

const PosPhoneInput = () => {
  return (
    <PhoneInput
      inputStyle={{ width: '100%' }}
      placeholder="Enter Phone No."
      onChange={(phone) => ({ phone })}
    />
  );
};

export default PosPhoneInput;
