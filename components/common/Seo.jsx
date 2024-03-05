import Head from "next/head";

const Seo = ({ pageTitle }) => (
  <>
    <Head>
      <title>{pageTitle && `${pageTitle}`}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="title" content="PT GUNUNG MAS INOVASI" />
      <meta
        name="description"
        content="PT GUNUNG MAS INOVASI Adalah Perusahaan IT Spesialis di bidang Micro Finance & Sistem Informasi berdomisili di kota bandung"
      />
      <meta
        name="keywords"
        content="IT,Finance,Micro,Micro Finance,Sistem,Sistem Informasi,Bank,Integrator,Data Center,Mobile,Website,Desktop"
      />
      <meta name="robots" content="index, follow" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"></meta>
    </Head>
  </>
);

export default Seo;
