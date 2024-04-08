import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';

export type Employee = {
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  phone: string;
  employeeType: string;
};

type EmployeeState = {
  data: Employee[];
};

const initialState: EmployeeState = {
  data: [],
};

export const EmployeeStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store) => ({
    updateUser: (employees: Employee[]) => {
      patchState(store, (state) => ({
        ...state,
        data: employees,
      }));
    },
  }))
);
