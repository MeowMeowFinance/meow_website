import React from 'react';
import {
  DialogTitle,
  DialogContent
} from "./DialogElements"
import {Button} from '../ButtonElements';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';

export default function Dialogue({open,c,t}) {
    return (
      <div>
        <Dialog
          open={open}
          onClose={c}
        >
          <div style={{padding:"25px"}}>
            <DialogTitle>{t('dialogTitle')}</DialogTitle>
            <DialogContent>
              <li>{t("dialogList1")}</li>
              <li>{t("dialogList2")}</li>
              <li>{t("dialogList3")}</li>
              <li>{t("dialogList4")}</li>
            </DialogContent>
    
            <DialogActions>
              <Button onClick={c}>{t("okButton")}</Button>
            </DialogActions>
          </div>
          
        </Dialog>
      </div>
    );
  }