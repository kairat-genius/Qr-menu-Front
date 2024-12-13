import CustomButton from '@/components/CustomButton/CustomButton';
import { AppLayout } from '../../layouts/AppLayout/AppLayout';
function Support() {
  return (
    <AppLayout>
      <div className="block-title">
        <h1 className="page-title">Support-Page</h1>

        <div>
          <CustomButton variant="custom">Back</CustomButton>
          <CustomButton>Save</CustomButton>
        </div>
      </div>
    </AppLayout>
  );
}

export default Support;
