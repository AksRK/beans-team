import Title from '@/components/UI/Title';
import Link from 'next/link';

const AboutTeamPage = () => {
  const start = 1; // Начальное число
  const end = 30; // Конечное число (включительно)

  const rangeArray = Array.from({ length: end - start + 1 }, (_, index) => start + index);
  return (
    <div className={'small-container'}>
      <Title>О команде</Title>
      {rangeArray.map((el, index) => (
        <h1 key={index}>{el}</h1>
      ))}
      <Link href={'/'}>Главная</Link>
    </div>
  );
};

export default AboutTeamPage;
