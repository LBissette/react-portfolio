import Profile from '../../assets/logan-head.jpg';

function AboutMe() {
  return (
    <div className='className="flex flex-col bg-slate-600 text-gray-300 m-6 rounded-lg border-2 border-gray-300'>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 lg:w-1/3 p-3">
          <img src={Profile} alt="Profile" className="rounded-lg" />
        </div>
        <div className="w-full md:w-1/2 lg:w-2/3 p-3">
          <h1 className="text-gray-200 text-3xl font-bold leading-tight">
            About Me
          </h1>
          <p className="text-gray-200 text-lg">
            My name is Logan Bissette. I am a 24-year old accountant turned web
            developer. After graduating from Western Carolina University in the
            height of the pandemic. I also found out I didn't like doing the
            thing I graduated for. This is why I am finishing up a full-stack
            development bootcamp at UNC Charlotte.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
