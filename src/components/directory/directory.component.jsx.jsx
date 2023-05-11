import './directory.styles.scss';
import CategoryItem from '../category-item/category-item.component';

const Directory = ({ categories }) => {
  return (
    <div className='directory-container'>
      {categories.map((category) => (
        <CategoryItem
          key={category.id}
          title={category.title}
          category={category}
        />
      ))}
    </div>
  );
};

export default Directory;
