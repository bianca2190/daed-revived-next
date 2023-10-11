'use client'

import { useTranslation } from 'react-i18next'
import { ResourcePage } from '~/components/ResourcePage'

export default function OrchestratePage() {
  const { t } = useTranslation()

  return (
    <ResourcePage name={t('primitives.orchestrate')}>
      <div className="grid grid-cols-2 gap-2">
        <div className="col-span-2 flex flex-col gap-2 rounded-lg border border-primary p-2">
          <h3 className="text-lg">{t('primitives.group')}</h3>

          <div className="flex flex-col gap-1">
            <div className="rounded border border-accent p-1 text-sm">hello world</div>
            <div className="rounded border border-accent p-1 text-sm">hello world</div>
            <div className="rounded border border-accent p-1 text-sm">hello world</div>
            <div className="rounded border border-accent p-1 text-sm">hello world</div>
            <div className="rounded border border-accent p-1 text-sm">hello world</div>
          </div>
        </div>

        <div className="col-span-2 flex flex-col gap-2 rounded-lg border border-primary p-2 sm:col-span-1">
          <h3 className="text-lg">{t('primitives.subscription')}</h3>

          <div className="flex flex-col gap-1">
            <div className="rounded border border-accent p-1 text-sm">hello world</div>
            <div className="rounded border border-accent p-1 text-sm">hello world</div>
            <div className="rounded border border-accent p-1 text-sm">hello world</div>
            <div className="rounded border border-accent p-1 text-sm">hello world</div>
            <div className="rounded border border-accent p-1 text-sm">hello world</div>
          </div>
        </div>

        <div className="col-span-2 flex flex-col gap-2 rounded-lg border border-primary p-2 sm:col-span-1">
          <h3 className="text-lg">{t('primitives.node')}</h3>

          <div className="flex flex-col gap-1">
            <div className="rounded border border-accent p-1 text-sm">hello world</div>
            <div className="rounded border border-accent p-1 text-sm">hello world</div>
            <div className="rounded border border-accent p-1 text-sm">hello world</div>
            <div className="rounded border border-accent p-1 text-sm">hello world</div>
            <div className="rounded border border-accent p-1 text-sm">hello world</div>
          </div>
        </div>
      </div>
    </ResourcePage>
  )
}
