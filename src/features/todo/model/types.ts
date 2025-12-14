export type TodoListStatus = 'TO DO' | 'DONE';

// 목록 조회 타입
export interface TodoList {
  id: number;
  name: string;
  isCompleted: boolean;
}

export type TodoListResponse = TodoList[];

// todo 상세 조회
export interface TodoDetail {
  id: number;
  tenantId: number;
  name: string;
  memo: string;
  imageUrl: string;
  isCompleted: boolean;
}

// todo 생성 body 타입
export interface CreateTodoReqBody {
  name: string;
}

// todo 업데이트 body 타입
export interface UpdateTodoReqBody {
  name?: string;
  memo?: string;
  imageUrl?: string;
  isCompleted?: boolean;
}
