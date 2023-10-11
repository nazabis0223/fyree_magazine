import AuthorsList from "@/components/AuthorList";
import PageTitle from "@/components/PageTitle";

export default function AuthorsPage() {
  return (
    <main className="flex flex-col px-4 lg:px-8">
      <PageTitle className="sr-only" imgSrc="/images/titles/Authors.svg">
        Authors
      </PageTitle>
      <AuthorsList />
    </main>
  );
}
