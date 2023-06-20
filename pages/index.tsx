import Link from 'next/link'
import { MainLayout } from '@/components/layouts/MainLayout'


export default function HomePage() {
  return (

    <MainLayout>
      <h2 className={'card'}>Home Page</h2>
        <div className={'description'}>
          <div>
            <Link href='/about'>Ir a About</Link>
          </div>
          <p>
            Get started by editing&nbsp;
            <code className={'code'}>pages/index.tsx</code>
          </p>
        </div>
    </MainLayout>

  )
}
