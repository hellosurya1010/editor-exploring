import { Box, TextField } from '@mui/material'
import { MenuButton, MenuButtonProps, useRichTextEditorContext } from 'mui-tiptap'
import DoneIcon from '@mui/icons-material/Done';
import React from 'react'
// import { Step } from '@tiptap/pm/transform';
import { ReplaceStep, Step } from 'prosemirror-transform';
import { Fragment, Slice } from '@tiptap/pm/model';

export type MenuButtonTrackChangesProps = Partial<MenuButtonProps>;


export function MenuButton1(props: MenuButtonTrackChangesProps) {
    const editor = useRichTextEditorContext();
    return (
        <MenuButton
            tooltipLabel="Accept change"
            IconComponent={DoneIcon}
            onClick={() => {
                if(!editor) return;
                console.log(editor.schema.text('Hello surya'));
                const slice = new Slice(new Fragment(), 1, 2);
                const step = new ReplaceStep(1, 2, slice);
                
                console.log();
                
            }}
            {...props}
        />
    );
}

export function MenuButton2(props: MenuButtonTrackChangesProps) {
    const editor = useRichTextEditorContext();
    return (
        <MenuButton
            tooltipLabel="Accept change"
            IconComponent={DoneIcon}
            onClick={() => {
                editor?.commands.showInvisibleCharacters()                
            }}
            {...props}
        />
    );
}

export function MenuButton3(props: MenuButtonTrackChangesProps) {
    const editor = useRichTextEditorContext();
    return (
        <MenuButton
            tooltipLabel="Accept change"
            IconComponent={DoneIcon}
            onClick={() => {
                editor?.commands.hideInvisibleCharacters()
            }}
            {...props}
        />
    );
}