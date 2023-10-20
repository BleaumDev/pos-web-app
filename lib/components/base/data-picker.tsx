import DatePicker from 'react-widgets/DatePicker';

const PosDatePicker = () => {
  return (
    <DatePicker
      defaultValue={new Date()}
      className="primary-font-medium"
      style={{
        marginTop: '1em',
        color: 'rgba(18, 23, 30, 0.30) !important',
        borderRadius: '4px',
        height: '40px',
        fontSize: '14px',
      }}
    />
  );
};

export default PosDatePicker;
