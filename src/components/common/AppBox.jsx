export default function AppBox({ app }) {
  return (
    <div className='rounded-t-lg shadow hover:shadow-2xl w-fit'>
      <img src={app.image} alt={app.name} className='rounded-lg object-cover' />
      <h2 className='text-center'>{app.name}</h2>
    </div>
  );
}
