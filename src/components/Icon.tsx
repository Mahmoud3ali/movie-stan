type Props = {
  title: string;
  Icon: React.ForwardRefExoticComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
      titleId?: string | undefined;
    }
  >;
};

export const Icon = ({ title, Icon }: Props) => {
  return (
    <div className="group flex w-12 cursor-pointer flex-col items-center sm:w-20">
      <Icon className="mb-1 h-6 group-hover:animate-bounce" />
      <p className="font-bold uppercase tracking-widest underline opacity-0 group-hover:opacity-100">
        {title}
      </p>
    </div>
  );
};
