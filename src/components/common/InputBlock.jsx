export default function InputBlock(props) {
  return (
    <div className='text-[24px] flex flex-col'>
      <label className={props.bolding ? 'font-bold' : ''}>{props.label}</label>
      <input
        className='border border-gray-500 p-0.5 focus:ring-2 
      focus:ring-blue-500 rounded-r-lg bg-transparent w-full'
        value={props.value}
        onChange={e => props.setValue(e.target.value)}
        placeholder={props.input}
        type={props.type}
        required
      />
    </div>
  );
}
