// src/components/ReviewRating.tsx
import { useContext, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TextInput, NumberInput, Button, Group } from '@mantine/core';
import { ServiceContext } from '../context/ServiceContext';
import { notifications } from '@mantine/notifications';
import type { Review } from '../types';

function ReviewRating() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();
  const context = useContext(ServiceContext);
  if (!context) return null;
  const { addReview, user } = context;
  const [rating, setRating] = useState<number | undefined>(undefined);
  const [comment, setComment] = useState('');

  const handleSubmit = () => {
    if (!rating || !comment) {
      notifications.show({ title: 'Error', message: 'Please provide a rating and comment', color: 'red' });
      return;
    }
    addReview(parseInt(serviceId!), { user: user.name, rating, comment });
    notifications.show({ title: 'Success', message: 'Review submitted!', color: 'green' });
    navigate('/');
  };

  return (
    <Group className="p-4 flex-col">
      <TextInput
        label="Comment"
        value={comment}
        onChange={(e) => setComment(e.currentTarget.value)}
        required
        className="w-1/2"
      />
      <NumberInput
        label="Rating"
        value={rating}
        onChange={(value) => setRating(value as number)}
        min={1}
        max={5}
        required
        className="w-1/2"
      />
      <Button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-600">Submit Review</Button>
    </Group>
  );
}

export default ReviewRating;