import React, { useState } from 'react';
import Typography from '../../Typography';
import FlexLayout from 'src/Layout/Flex';
import Toggle from 'src/modules/Checkbox/Toggle';
import Rating from 'src/components/Rating';
import { IEvents } from 'src/utils/types';

const FilterBrand: React.FC = () => {
  const [rating, setRating] = useState<(string | number)[]>([]);

  const handleChangeRating = (e: IEvents) => {
    const ratingVal = Number(e.target.value);
    if (e.target.checked) {
      setRating((prev) => [...prev, ratingVal]);
    } else {
      const updateValue = rating.filter((item) => item !== ratingVal);
      setRating(updateValue);
    }
  };

  console.log('🚀 ~ rating:', rating);

  return (
    <div className='w-full'>
      <Typography as='h2' className='mb-4 text-lg font-semibold'>
        Ratings
      </Typography>
      {Array(5)
        .fill(0)
        .map((_, index) => (
          <FlexLayout
            key={index}
            className='flex-col-reverse !items-start gap-2'
          >
            <Toggle
              onChange={handleChangeRating}
              name='brand'
              value={index + 1}
              text={<Rating star={index + 1} />}
            />
          </FlexLayout>
        ))}
    </div>
  );
};

export default FilterBrand;
