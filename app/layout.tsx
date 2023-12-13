import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <script type="text/javascript">
var _iub = _iub || [];
_iub.csConfiguration = {"askConsentAtCookiePolicyUpdate":true,"enableFadp":true,"enableLgpd":true,"enableTcf":true,"enableUspr":true,"fadpApplies":true,"floatingPreferencesButtonDisplay":"bottom-right","googleAdditionalConsentMode":true,"lang":"en","perPurposeConsent":true,"siteId":3415009,"showBannerForUS":true,"tcfPurposes":{"2":"consent_only","7":"consent_only","8":"consent_only","9":"consent_only","10":"consent_only","11":"consent_only"},"usprApplies":true,"usprPurposes":"s,sh,adv,sd8,sd9,sd5","whitelabel":false,"cookiePolicyId":98921525, "banner":{ "acceptButtonDisplay":true,"closeButtonDisplay":false,"customizeButtonDisplay":true,"explicitWithdrawal":true,"listPurposes":true,"position":"float-top-center","rejectButtonDisplay":true,"showTitle":false }};
</script>
<script type="text/javascript" src="https://cs.iubenda.com/autoblocking/3415009.js"></script>
<script type="text/javascript" src="//cdn.iubenda.com/cs/tcf/beta/stub-v2.js"></script>
<script type="text/javascript" src="//cdn.iubenda.com/cs/tcf/beta/safe-tcf-v2.js"></script>
<script type="text/javascript" src="//cdn.iubenda.com/cs/gpp/beta/stub.js"></script>
<script type="text/javascript" src="//cdn.iubenda.com/cs/beta/iubenda_cs.js" charset="UTF-8" async></script>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
