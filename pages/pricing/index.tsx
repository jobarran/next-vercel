import Link from 'next/link'
import { MainLayout } from '@/components/layouts/MainLayout'


export default function PricingPage() {
  return (

    <MainLayout>
      <h2 className={'card'}>Pricing Page</h2>
        <div className={'description'}>
          <div>
            <Link href='/about'>Ir a Home</Link>
          </div>
          <p>
            Get started by editing&nbsp;
            <code className={'code'}>pages/princing.tsx</code>
          </p>
        </div>
    </MainLayout>

  )
}
