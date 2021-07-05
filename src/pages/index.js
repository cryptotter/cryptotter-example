import Image from 'next/image';
import {FastField, Formik} from 'formik';
import * as yup from 'yup';
import Head from 'next/head';
import {create as orderCreate} from '../connnections/orders';
import {CryptotterButton} from '@cryptotter/react';
import {useState} from 'react';

const price = 0.001;
function Home() {
  const [state, setState] = useState({
    transactionId: null,
  });
  return (
    <Formik
      initialValues={{count: 1}}
      validationSchema={yup.object({
        count: yup.number().min(1).required(),
      })}
      onSubmit={async (values) => {
        const response = await orderCreate({
          name: 'Very good apple',
          amount: price * values.count,
        });
        state.transactionId = response.id;
        // window.location.href = `${process.env.NEXT_PUBLIC_PAY}/${response.id}`;
      }}
    >
      {(form) =>
        ((globalThis.form = form), false) || (
          <div className={'w-screen h-screen flex justify-center items-center'}>
            <Head>
              <title>Example of shop</title>
            </Head>
            <form onSubmit={form.handleSubmit} className={'flex flex-col'}>
              <Image
                className={'flex'}
                alt={'apple product'}
                src={
                  'https://upload.wikimedia.org/wikipedia/ru/e/e5/Magritte_TheSonOfMan.jpg'
                }
                layout={'responsive'}
                height={128}
                width={96}
              />
              <div className={'mt-2 flex justify-center'}>Apple</div>
              <div className={'flex justify-between mt-2'}>
                <div>Price</div>
                <div className={'ml-2'}>${price}$</div>
              </div>
              <div className={'mt-4 flex items-center'}>
                <div>Count</div>
                <FastField name={'count'}>
                  {({field}) => (
                    <input
                      {...field}
                      className={`ml-4`}
                      type={'number'}
                      min={1}
                    />
                  )}
                </FastField>
              </div>
              <div className={'flex justify-between mt-4'}>
                <div>Total price</div>
                <div className={'ml-2'}>
                  ${(price * 1e6 * form.values.count) / 1e6}$
                </div>
              </div>
              <CryptotterButton
                onClick={async () => {
                  await form.submitForm();
                  if (!state.transactionId) {
                    return false;
                  }
                  setState({
                    ...state,
                    transactionId: null,
                  });

                  return {
                    transaction: state.transactionId,
                  };
                }}
                type={'popup'}
              >
                Buy with crypto
              </CryptotterButton>
            </form>
          </div>
        )
      }
    </Formik>
  );
}

export default Home;
