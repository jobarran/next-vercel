import { MainLayout } from '@/components/layouts/MainLayout'
import Link from 'next/link'
import { LightLayout } from '../components/layouts/LightLayout';

export default function AboutPage() {

  return (
      <>
        <h2 className={'title'}>About Page</h2>
        <div className={'description'}>
          <div>
            <Link href='/'>Ir a Home</Link>
          </div>
          <p>
            Get started by editing&nbsp;
            <code className={'code'}>pages/about.tsx</code>
          </p>
        </div>
      </>
  )
}

type Props = {
  page: JSX.Element
}

AboutPage.getLayout = function getLayout( page:any ) {
  return (
    <MainLayout>
      <LightLayout>
        { page }
      </LightLayout>
    </MainLayout>
  )
}