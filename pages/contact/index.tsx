import Link from 'next/link'
import { MainLayout } from '@/components/layouts/MainLayout'

export default function AboutPage() {
  return (

    <MainLayout>
      <h2 className={'card'}>Contact Page</h2>
      <div className={'description'}>
        <div>
          <Link href='/'>Ir a Home</Link>
        </div>
        <p>
          Get started by editing&nbsp;
          <code className={'code'}>pages/contact.tsx</code>
        </p>
      </div>
    </MainLayout>

  )
}
