import { z } from 'zod'

import { DEFAULT_TUIC_FORM_VALUES, NodeType, tuicSchema } from '~/constants'
import { BaseNodeResolver } from '~/models'

export class TuicNodeResolver extends BaseNodeResolver<typeof tuicSchema> {
  type = NodeType.tuic
  schema = tuicSchema
  defaultValues = DEFAULT_TUIC_FORM_VALUES

  generate = (values: z.infer<typeof tuicSchema>) =>
    this.generateURL({
      protocol: 'tuic',
      username: values.uuid,
      password: values.password,
      host: values.server,
      port: values.port,
      hash: values.name,
      params: {
        congestion_control: values.congestion_control,
        alpn: values.alpn,
        sni: values.sni,
        allow_insecure: values.allowInsecure,
        disable_sni: values.disable_sni,
        udp_relay_mode: values.udp_relay_mode
      }
    })

  resolve(url: string) {
    const u = this.parseURL(url)

    return {
      name: decodeURIComponent(u.hash),
      uuid: decodeURIComponent(u.username),
      password: decodeURIComponent(u.password),
      server: u.host,
      port: u.port,
      sni: u.params.sni || '',
      allowInsecure: u.params.allow_insecure === true || u.params.allow_insecure === '1',
      disable_sni: u.params.disable_sni === true || u.params.disable_sni === '1',
      alpn: u.params.alpn,
      congestion_control: u.params.congestion_control || 'bbr',
      udp_relay_mode: u.params.udp_relay_mode || 'native'
    }
  }
}
