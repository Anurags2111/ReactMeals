import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Masala Chai',
    description: 'If there is one Indian drink that goes with everything (except dessert) it is masala chai.',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Samosa',
    description: 'The king of all street foods in India, samosa is a must-have every day of the year.',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Gajar ka halwa',
    description: 'This carrot dish is a winter favourite all over the country, and for a very good reason.',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Masala Dosa',
    description: 'Crispy and stuffed with spicy potato sabji, masala dosas are South India is gift to the rest of the world.',
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;