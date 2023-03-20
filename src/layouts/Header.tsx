import Button from '@/components/button';
import NavLink from '@/components/Link';

import Container from './Container';

type HeaderTypes = {
  title: string;
};
export default function Header({ title }: HeaderTypes) {
  return (
    <div className="border-b-[1px] border-gray-600 py-2">
      <Container>
        <div className="flex items-center justify-between">
          <div className="text-2xl font-medium">
            <NavLink href="/">Galib {title}</NavLink>
          </div>
          <div>
            <Button className="text-lg font-medium">Subscribe</Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
