import { Select } from 'antd';
import { categoryIcons } from './catIcons';

const { Option } = Select;

function CategoryDropdown() {
  return (
    <Select
    className="mb-2  rounded-lg px-3 py-2 text-lg font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-green-600"
      optionLabelProp="icon"
    >
      {categoryIcons.map((icon) => (
        <Option s icon={icon.icon}>
          {icon.icon} 
        </Option>
      ))}
    </Select>
  );
}

export default CategoryDropdown;
