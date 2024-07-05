import { AppPaths } from "@/features/app/data";
import { ContactCreateConfirm } from "@/features/contactCreate/ContactCreateConfirm";
import { ContactCreateForm } from "@/features/contactCreate/ContactCreateForm";
import { ContactCreateList } from "@/features/contactCreate/ContactCreateList";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

export function AppRouter() {
  return (
    <RouterProvider
      router={createBrowserRouter([
        {
          path: AppPaths.root,
          element: (
            <>
              <ContactCreateForm />
              <ContactCreateConfirm />
              <ContactCreateList />
            </>
          ),
        },
      ])}
    />
  );
}
