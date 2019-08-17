import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { CascaderComponent } from './cascader/cascader.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { DatePickerComponent } from './date-picker/date-picker.component'
import { FormComponent } from './form/form.component';
import { InputComponent } from './input/input.component';
import { InputNumberComponent } from './input-number/input-number.component';
import { MentionComponent } from './mention/mention.component'
import { RadioComponent } from './radio/radio.component';
import { RateComponent } from './rate/rate.component';
import { SelectComponent } from './select/select.component';
import { SliderComponent } from './slider/slider.component';
import { SwitchComponent } from './switch/switch.component';
import { TimePickerComponent } from './time-picker/time-picker.component';
import { TransferComponent } from './transfer/transfer.component';
import { TreeSelectComponent } from './tree-select/tree-select.component';
import { UploadComponent } from './upload/upload.component';

const routes: Routes = [
    {
        path: 'data-entry',
        data: {
            title: 'Data Entry'
        },
        children: [
            {
                path: '',
                redirectTo: '/dashboard',
                pathMatch: 'full'
            }, 
            {
                path: 'autocomplete',
                component: AutocompleteComponent,
                data: {
                    title: 'Autocomplete'
                }
            },
            {
                path: 'cascader',
                component: CascaderComponent,
                data: {
                    title: 'Cascader'
                }
            },
            {
                path: 'checkbox',
                component: CheckboxComponent,
                data: {
                    title: 'Checkbox'
                }
            },
            {
                path: 'date-picker',
                component: DatePickerComponent,
                data: {
                    title: 'Date Picker'
                }
            },
            {
                path: 'form',
                component: FormComponent,
                data: {
                    title: 'Form'
                }
            },
            {
                path: 'input',
                component: InputComponent,
                data: {
                    title: 'Input'
                }
            },
            {
                path: 'input-number',
                component: InputNumberComponent,
                data: {
                    title: 'Input Number'
                }
            },
            {
                path: 'mention',
                component: MentionComponent,
                data: {
                    title: 'Mention'
                }
            },
            {
                path: 'radio',
                component: RadioComponent,
                data: {
                    title: 'Radio'
                }
            },
            {
                path: 'rate',
                component: RateComponent,
                data: {
                    title: 'Rate'
                }
            },
            {
                path: 'select',
                component: SelectComponent,
                data: {
                    title: 'Select'
                }
            },
            {
                path: 'slider',
                component: SliderComponent,
                data: {
                    title: 'Slider'
                }
            },
            {
                path: 'switch',
                component: SwitchComponent,
                data: {
                    title: 'Switch'
                }
            },
            {
                path: 'time-picker',
                component: TimePickerComponent,
                data: {
                    title: 'Time Picker'
                }
            },
            {
                path: 'transfer',
                component: TransferComponent,
                data: {
                    title: 'Transfer'
                }
            },
            {
                path: 'tree-select',
                component: TreeSelectComponent,
                data: {
                    title: 'Tree Select'
                }
            },
            {
                path: 'upload',
                component: UploadComponent,
                data: {
                    title: 'Upload'
                }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ComponentsDataEntryRoutingModule { }
