import { Select } from 'antd';

const { Option } = Select;

interface CustomSelectProps {
  data: string[];
  value: string;
  onChange: any;
}

const CustomSelect = ({ data, value, onChange }: CustomSelectProps) => {
  return (
    <Select defaultValue={value} style={{ width: 120 }} onChange={(e) => onChange(e)}>
      {data.map((item) => (
        <Option key={`Select item #${item}`} value={item}>
          {item.charAt(0).toUpperCase() + item.slice(1)}
        </Option>
      ))}
    </Select>
  );
};

export default CustomSelect;
