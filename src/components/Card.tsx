import locationIcon from '../assets/icons/location.svg';
import officeIcon from '../assets/icons/office-building.svg';
import calendarIcon from '../assets/icons/calendar-dates.svg';

interface CardProps {
  title: string;
  status: string;
  info: string;
  location: string;
  date: string;
}

export function Card(cardProps?: CardProps) {
  return(
    <div className="flex flex-col"> 
      <div className="flex justify-between mb-1">
        <h2 className="text-xl text-storm-dust-500">
          {cardProps?.title }
        </h2>
        <span className="flex bg-green-200 text-green-700 text-xs font-semibold rounded-2xl w-24 h-6 items-center justify-center">
          {cardProps?.status}
        </span>
      </div>
      <div className="flex w-full justify-between text-storm-dust-300 font-medium text-xs">
        <div className='flex space-x-1'>
          <img src={officeIcon} alt="Icone de escritorio" className='w-3' />
          <p>{cardProps?.info}</p> 
        </div>
        <div className='flex space-x-1'>
          <img src={locationIcon} alt="Icone de localização" className='w-4' />
          <p>{cardProps?.location}</p>
        </div>
        <div className='flex space-x-1'>
          <img src={calendarIcon} alt="Icone de calendario" className='w-4' />
          <p>{cardProps?.date}</p>
        </div>
      </div>
      <hr className="w-full mt-6 mb-8 border-storm-dust-200 border-y-[1px]" />
    </div>
  );
}