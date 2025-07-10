function Title(props) {
  const title = props.title;
  const detail = props.detail;
  return (
    <div className="pt-6 pl-6 sm:pl-24 md:pl-48 lg:pl-72 xl:pl-96">
      <p className="text-3xl font-bold pb-2">{title}</p>
      <p>{detail}</p>
    </div>
  );
}

export default Title;