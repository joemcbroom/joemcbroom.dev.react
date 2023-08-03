const ProfileImage = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 100 120'
      width='213'
      className='group scale-90 transition-transform duration-500 ease-in-out hover:scale-100'
    >
      <defs>
        <clipPath id='maskImage' clipPathUnits='userSpaceOnUse'>
          <path d='M100 63A50 50 0 110 70C0 42 20 0 48 0c27 0 52 42 52 70z' />
        </clipPath>
        <clipPath id='maskBackground' clipPathUnits='userSpaceOnUse'>
          <path d='M190 101a50 50 0 01-50 50 50 50 0 01-50-50 50 50 0 0150-50 50 50 0 0150 50z' />
        </clipPath>
      </defs>
      <g clip-path='url(#maskImage)' transform='translate(0 -7)'>
        <image
          clip-path='url(#maskBackground)'
          width='120'
          height='120'
          x='70'
          y='38'
          href='./abstract-bg.jpg'
          transform='translate(-90 -31)'
        />
        <image
          width='125'
          height='154'
          x='-10'
          y='-5'
          fill='none'
          className='origin-center translate-y-1 scale-100 transition-transform duration-500 ease-in-out group-hover:-translate-y-2 group-hover:scale-105'
          href='./profile-img.png'
        />
      </g>
    </svg>
  );
};

export default ProfileImage;
