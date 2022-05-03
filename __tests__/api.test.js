import { abci } from '../src/proto';
import { tm } from '../src/proto';

it('abci', async () => {
  const result = abci.BlockParams.toJSON({
    MaxBlockBytes: '',
    MaxGas: '',
    MaxDataBytes: '',
    MaxTxBytes: '',
    TimeIotaMS: '000'
  });
  expect(result).toMatchSnapshot();
});

it('tm', async () => {
  const result = tm.Proof.toJSON({
    Ops: [
      tm.ProofOp.toJSON({
        Data: undefined,
        Key: undefined,
        Type: ''
      })
    ]
  });
  expect(result).toMatchSnapshot();
});
