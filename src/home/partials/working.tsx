import Image from 'next/image';

export default function WorkingSection() {
  const skills1 = [
    'React Expert',
    'Precise Website Implementation',
    'TypeScript Proficiency',
    'Clean, Maintainable Code',
    'Responsive Website Development',
    'UI Design Proficiency (Figma)',
  ];
  const skills2 = [
    'Basic React Knowledge',
    'Inconsistent Design Translation',
    'Little to No TypeScript Knowledge',
    'Unstructured Code',
    'Inconsistent Responsiveness',
    'No Design Skills',
  ];

  return (
    <section className='custom-container mt-8 w-full p-6 md:mt-50 md:px-32'>
      <header className='text-center'>
        <h3 className='text-md text-primary-200 font-medium md:mb-2 md:text-lg'>
          WORKING
        </h3>
        <h2 className='display-md-extrabold text-neutral-25 md:display-xl-extrabold mt-2'>
          WHY CHOOSE ME?
        </h2>
      </header>
      <div className='grid grid-cols-1 gap-8 md:mt-12 md:grid-cols-2 md:gap-20'>
        {/* Column 1 */}
        <div>
          <h2 className='mt-6 mb-6 text-center text-xl font-bold'>
            WORKING WITH ME
          </h2>
          <div className='flex-center mb-6 flex'>
            <Image
              src='/images/suny2.png'
              alt='profilImage'
              width={100}
              height={100}
              className='md:h-auto'
            />
          </div>
          <div className='text-md space-y-6 font-bold'>
            {skills1.map((skill, index) => (
              <div key={index}>
                <div className='flex items-center gap-4'>
                  <Image
                    src='/icons/star.svg'
                    alt='star'
                    width={22.83}
                    height={24}
                    className='text-primary-200 h-5 w-5'
                  />

                  <span>{skill}</span>
                </div>
                {index < 5 && <hr className='my-6 border-neutral-800' />}
              </div>
            ))}
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h2 className='mt-6 mb-6 text-center text-xl font-bold'>
            ANOTHER TALENT
          </h2>
          <div className='flex-center mb-6 flex'>
            <Image
              src='/images/another.svg'
              alt='profilImage'
              width={65}
              height={65}
              className='flex-center md:mt-3 md:mb-6 md:h-auto'
            />
          </div>
          <div className='text-md-regular space-y-6 text-neutral-400'>
            {skills2.map((skill, index) => (
              <div key={index}>
                <div className='flex items-center gap-2'>
                  <Image
                    src='/icons/star2.svg'
                    alt='star'
                    width={22.83}
                    height={24}
                    className='text-primary-300 h-5 w-5'
                  />
                  <span>{skill}</span>
                </div>
                {index < 5 && <hr className='my-6 border-neutral-800' />}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Button */}
      <div className='mt-6 text-center'>
        <button className='bg-primary-200 hover:bg-primary-300 md:text-md-bold w-full cursor-pointer rounded-full px-6 py-2 text-sm font-bold text-neutral-950 transition md:h-[56] md:w-[240]'>
          HIRE ME
        </button>
      </div>
    </section>
  );
}
