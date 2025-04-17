function Title(props) {
  return (
    <div className="pt-6 pl-6">
      <p className="text-3xl font-bold pb-2">신발 상품 목록</p>
      <p>현재 {props.num}개의 상품이 있습니다.</p>
    </div>
  );
}

export default Title;