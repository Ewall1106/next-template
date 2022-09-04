import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import Link from 'next/link'

import Home from './home'

import type { NextPage } from 'next'

const Index: NextPage = () => {
  const router = useRouter()
  const { t } = useTranslation('common')

  const changeTo = router.locale === 'en' ? 'de' : 'en'

  return (
    <>
      <Home />
      <p>{t('title')}</p>
      <Link href="/" locale={changeTo}>
        <button>{t('change-locale', { changeTo })}</button>
      </Link>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }: any) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common']))
    }
  }
}

export default Index
