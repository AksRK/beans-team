import './header.scss';
import { LogoSvg } from '@/components/UI/svg/logo';
import Link from 'next/link';
import { geometriaMedium } from '@/core/fonts/Geometria';
import Button from '@/components/UI/Button';

const Header = () => {
  return (
    <div className={'large-container'}>
      <header className={'header'}>
        <div className={'header__logo'}>
          <LogoSvg />
          <Link href={'/'} className={geometriaMedium.className}>
            Beans
          </Link>
        </div>
        <div className={'header__form-button'}>
          <Button>Обсудить проект</Button>
        </div>
      </header>
    </div>
  );
};

export default Header;
