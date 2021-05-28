import PropTypes from 'prop-types';

const Breadcrumb = ({ title }) => (
  <section className="bg-white w-full flex lg:justify-center justify-end shadow">
    <div className="container mx-auto">
      <h1 className="lg:px-8 lg:text-left text-center py-6 text-gray-900 text-3xl font-bold">{title}</h1>
    </div>
  </section>
);

export default Breadcrumb;

Breadcrumb.propTypes = {
  title: PropTypes.string.isRequired,
};
