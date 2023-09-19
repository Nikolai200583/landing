type Props = {
  className?: string;
  pathName?: string;
};

const SvgComponent = ({ className, pathName }: Props) => {
  return (
    <svg className={className}>
      <use xlinkHref={`img/sprite.svg#${pathName}`}></use>
    </svg>
  );
};
export { SvgComponent };
