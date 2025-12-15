import Image from 'next/image';
import todoImages from '@/features/todo/assets/images';
import { TodoListStatus } from '@/features/todo/model/types';

const contentMap = {
  'TO DO': {
    img: todoImages.todoEmpty,
    text: (
      <>
        할 일이 없어요. <br />
        TODO를 새롭게 추가해주세요!
      </>
    ),
  },
  DONE: {
    img: todoImages.doneEmpty,
    text: (
      <>
        아직 다 한 일이 없어요. <br />
        해야 할 일을 체크해보세요!
      </>
    ),
  },
};

export default function ListEmpty({ status }: { status: TodoListStatus }) {
  const content = contentMap[status];

  return (
    <div className='flex w-full flex-col items-center gap-[24px]'>
      <Image loading='eager' width={240} height={240} src={content.img} alt='' />
      <span className='text-center font-md-b text-slate-400'>{content.text}</span>
    </div>
  );
}
